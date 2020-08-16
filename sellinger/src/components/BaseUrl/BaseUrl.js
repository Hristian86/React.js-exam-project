const url = (parametar) => {
    const hostedUrl = "https://react-back-end-serv.herokuapp.com/api/";
    const localUrl = "http://localhost:3002/api/";

    return localUrl + parametar;
}

export default url;