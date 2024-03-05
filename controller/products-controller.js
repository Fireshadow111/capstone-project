import { getProducts, getProduct, postProduct , deleteProduct, patchProduct} from "../models/products-database.js";


export default{
    getProducts: async(req,res)=>{
        try{
            res.send(await getProducts())
        } catch(error){
            console.error('Error getting products');
            res.status(500).json({msg: "Internal Server Error"});
        }
   
    },

    getProduct: async(req,res)=>{

        try{
            res.send(await getProduct(+req.params.id))
        } catch(error){

            console.error('Error getting products');
            res.status(404).json({msg: "Product not found"});
        }

       
    },

    postProduct: async(req,res)=>{

        try{
            const { prod_URL, prod_Name, category, price } = req.body;
            await postProduct(prod_URL, prod_Name, category, price);
            res.send(await getProducts())

        } catch(error){
            console.error('Error adding product');
            res.status(404).json({msg: "Could not add product"});
        }

      
    },

    deleteProduct: async(req,res)=>{
        res.send(await deleteProduct(req.params.id));   
    },

    patchProduct: async(req,res)=>{
        const [product] = await getProduct(+req.params.id)

        let {prod_URL, prod_Name, category, price} = req.body

        prod_URL ? prod_URL=prod_URL: {prod_URL}=product

        prod_Name ? prod_Name= prod_Name: {prod_Name}=product

        category ? category= category: {category}=product

        price ? price= price: {price}=product

        await patchProduct(prod_URL, prod_Name, category, price,+req.params.id)
        
        res.json(await getProducts())
    }
}
  