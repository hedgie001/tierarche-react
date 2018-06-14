class Content {
    public getContent(callback){
        fetch("http://localhost/directus/api/1.1/tables/content/rows")
        .then((r: any) => {
            return r.json();
        })
        .then((data) => {
            const output = {};
            data.data.forEach((item)=>{
                output[item.key] = item.value;
            });
            callback(output);
        });
    }
}

export default Content;
