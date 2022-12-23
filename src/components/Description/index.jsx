

const Description=({
    customerDescription,
    handleCustomerDescriptionChange
})=>{
    console.log("Customer Description", customerDescription)
    return(
        <div className="description-container"> 
            <textarea
            rows="4"
            cols="50"
            label="description"
            value={customerDescription}
            onChange={handleCustomerDescriptionChange}
            >
            </textarea>
        </div>
    )

}

export default Description;