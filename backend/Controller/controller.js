import Book from "../model/bookmodel.js";

export const getBook = async(req,res)=>{
    try{
   const book = await Book.find();
   res.status(200).json(book);
    }catch(error){
 console.log(error,'Error');
 res.status(500).json(error);
    }
}