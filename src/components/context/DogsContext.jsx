import React, {createContext, useEffect, useState} from "react";

export const DogsContext = createContext(null);

const DogsContextProvider = ({ children }) => {
    const [list, setList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesData, setImagesData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(response=>response.json())
        .then(data=>data.message)
        .then(data=>Object.keys(data))
        .then(data=>setList(data));
    },[]);


    useEffect(()=>{
        if (list.length!=0){
            for (let i=0;i<5;i++){
                fetchNext();
            }
        }
    },[list])



    function fetchNext(){
        if (isLoading){
            return;
        }
        let image;
        setIsLoading(true);
        fetch('https://dog.ceo/api/breed/' + list[currentIndex][0] + list[currentIndex].slice(1) + '/images/random')
        .then(response=>response.json())
        .then(data=>data.message)
        .then(imageUrl=>{
            image = imageUrl
        }).then(res=>{
            setImagesData((prev)=>[...prev, {img:image}]);
            setIsLoading(false);
        })
        setCurrentIndex(prev=>prev+1);
    }


  
    return (
      <DogsContext.Provider value={{ fetchNext, imagesData,list }}>
        {children}
      </DogsContext.Provider>
    );
}


export default DogsContextProvider