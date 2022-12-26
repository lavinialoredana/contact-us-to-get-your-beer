import DescriptionCss from './Description.css';

const Description=({
    customerDescription,
    handleCustomerDescriptionChange
})=>{
    console.log("Customer Description", customerDescription)
    return(
        <div className="description-container"> 
            <textarea
            rows="8"
            cols="60"
            label="description"
            placeholder='Type here your request'
            value={customerDescription}
            onChange={handleCustomerDescriptionChange}
            >
            </textarea>
        </div>
    )

}

export default Description;