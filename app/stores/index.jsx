import { observable, computed, action } from 'mobx';
import { prefix } from 'Root/config'; 
import 'isomorphic-fetch';

function BaseFetch(url, cb) {
    return fetch(url)
        .then(res => res.json())
        .then(data => cb(data));
}
const getData = key => {
    const data = typeof localStorage === 'undefined' ? null : 
        localStorage.getItem(`mobx-cnode-${key}`);
    return data && JSON.parse(data);
};
const getPath = () => {
    const { pathname } = location; 
    return pathname === '/' ? 'all' : pathname;
}
class Store {
    static fetchData(key) {
        return BaseFetch(`/server/${key}`, data => {
            this[key] = data;
            localStorage.setItem(
                `mobx-cnode-${key}`, 
                JSON.stringify(data)
            );
        });
    };
    @observable api = getData('api');
    @observable getstart = getData('getstart');
    @observable about = getData('about');
    @observable list = [];
    @observable topic = {};
    fetchAPI() {
        return Store.fetchData.call(this, 'api');
    }
    fetchGETSTART() {
        return Store.fetchData.call(this, 'getstart');
    }
    fetchABOUT() {
        return Store.fetchData.call(this, 'about');
    }
    fetchList(query) {
        query = query ? `${query}&limit=40` : '?limit=40';
        return fetch(`${prefix}/server/api/v1/topics/${query}`)
            .then(res => res.json())
            .then(data => {
                data = JSON.parse(data);
                this.list = data.data;
            });
    }
    fetchTopic(id) {
        return BaseFetch(`${prefix}/server/api/v1/topic/${id}`, data => {
            data = JSON.parse(data).data;
            this.topic = data;
        });
    }
}

export default Store;