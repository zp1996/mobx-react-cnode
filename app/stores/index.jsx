import { observable, computed, action } from 'mobx'; 

function fetchData(key) {
    return fetch(`/server/${key}`)
        .then(res => res.json())
        .then(data => {
            this[key] = data;
            localStorage.setItem(
                `mobx-cnode-${key}`, 
                JSON.stringify(data)
            );
        });
}
const getData = key => {
    const data = localStorage.getItem(`mobx-cnode-${key}`);
    return data && JSON.parse(data);
};
const getPath = () => {
    const { pathname } = location; 
    return pathname === '/' ? 'all' : pathname;
}
class Store {
    @observable api = getData('api');
    @observable getstart = getData('getstart');
    @observable about = getData('about');
    @observable list = [];
    fetchAPI() {
        return fetchData.call(this, 'api');
    }
    fetchGETSTART() {
        return fetchData.call(this, 'getstart');
    }
    fetchABOUT() {
        return fetchData.call(this, 'about');
    }
    fetchList(query) {
        return fetch(`/server/api/v1/topics?${query}`)
            .then(res => res.json())
            .then(data => {
                data = JSON.parse(data);
                this.list = data.data;
            });
    }
}

export default Store;