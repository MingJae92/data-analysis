import { useState } from 'react'
import { BikeNetworkData } from '../../../Types/Types'
function Paginationbutton({networks}:BikeNetworkData) {
    const [currentPage, setCurrentPage]=useState(1)
    const itemPerPage = 10
    const totalPage= Math.ceil(networks.length/itemPerPage)
    
    const currentData = networks.slice((currentPage-1)*itemPerPage, currentPage*itemPerPage)
    const handleNext = ()=>{
        if(currentPage<totalPage){
            setCurrentPage(currentPage+1)
        }
    }

    const handlePrepage = ()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }
  return (
    <div>

    </div>
  )
}

export default Paginationbutton