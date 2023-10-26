import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

 export const GitExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        //console.log('Otra Opcion');
        if(categories.includes(newCategory)) return
        setCategories([newCategory,...categories]);
    }

    //console.log(categories)

    return(
        <>
        <h1>GitExpertApp</h1>
        {/*<button onClick={onAddCategory}>Agregar</button>*/}
        <AddCategory
         //setCategories = {setCategories}
         onNewCategory = { event => onAddCategory(event)}
         />
           {
            categories.map((category) => (
                    <GifGrid
                    key={category}
                    category = {category}/>
                )) }
               
        
        </>
        
        
    )
 }