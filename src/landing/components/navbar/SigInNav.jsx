import React, { useEffect,useState } from 'react'
import CustomSelect  from '../CustomSelect' 
// import { useTranslation } from 'react-i18next'
import Tr from "icons/LanguageIcon.svg"
const SigInNav = () => {
    // const { i18n } = useTranslation();
    // const {t}=useTranslation();
    const [selectedLanguage ,setSelectedLanguage]=useState({
        title:"English",
        value:"en",
    })
    const languages=[
        {title:"English",value:"en"},
        {title:"Russian",value:"ru"}
    ]
    // useEffect(()=>{
    //     if(selectedLanguage && selectedLanguage.value)
    //     {
    //         i18n.changeLanguage(selectedLanguage.value);
    //     }
    // },[selectedLanguage,i18n])  


    return (
    <>
    <div className='max-h-10 gap-4 justify-center flex items-center'>
        <CustomSelect 
        selectedOption={selectedLanguage}
        setSelectedOption={setSelectedLanguage}
        options={languages}
        logo={Tr}></CustomSelect>
        <button  className='border-transparent hover:bg-[#ce272ffb] duration-200 rounded-md h-9 text-white bg-[rgb(229,9,20) px-3 py1'>SignIn</button>
    </div>
    </>
  )
}

export default SigInNav