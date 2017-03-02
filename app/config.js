const config = {
    all: '全部',
    good: '精华',
    share: '分享',
    ask: '问答',
    job: '招聘'
};

const prefix = process.env.NODE_ENV === 'production' 
    ? 'http://localhost:9000' : '';

export { config, prefix };