import person from"../models/person.js"

const addUserEmail= async (req,res)=>{
    const {email}=req.body;
    if(!email){
        res.status(400).json({
            msg:"Data not found"
        })
    }
    try {
        let data=await person.create({
            email
        })
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(
            error
        )
    }
}

export  {addUserEmail}