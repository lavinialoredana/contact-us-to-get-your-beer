

const Description=({
    customerDescription,
    handleCustomerDescription
})=>{
    console.log("Customer Description", customerDescription)
    return(
        <div className="description-container"> 
            <textarea
            rows="4"
            cols="5"
            label="description"
            defaultValue={customerDescription}
            onChange={handleCustomerDescription}
            >
            </textarea>
        </div>
    )

}

export default Description;