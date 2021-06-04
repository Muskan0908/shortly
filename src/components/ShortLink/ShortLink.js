import React,{useState} from 'react'
import { Button } from '../../globalStyles'
import {ShortLinkContainer,Form,FormInput,ShortLinkWrapper,
       ShortLinkHistory,ShortLinkItem,OriginalLink,NewLink ,CopyButton,EmptyInput} from './ShortLink.elements';
import Loading from '../Loading/Loading';

const ShortLink = () => {
    const[value,setValue]=useState("");
    const[error,setError]=useState(false);
    const[urls,setUrls]=useState([]);
    const[loading,setLoading]=useState(false);
    const[errorLink,setErrorLink]=useState(false);
    const[errorMessage,setErrorMessage]=useState("");
    const[primary,setPrimary]=useState(true);

    const handleChange=(e)=>{
        setValue(e.target.value);
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(value.trim()!==""){
            setPrimary(true);
            setLoading(true);
            setError(false);
            const response=await fetch('https://api.shrtco.de/v2/shorten?url='+value)
            const data=await response.json();
            
            setLoading(false);
           
        if(data.ok){
            const temp=[...urls];
            const tempObject={
                id:Math.random(),
                originalUrl:value,
                newUrl:data.result.full_short_link,
                copied:false
            }
            temp.push(tempObject);
            setUrls(temp);
            setValue("");
            
            setErrorLink(false);
            setErrorMessage("");
        }
        else{
            setErrorLink(true);
            setErrorMessage(data.error);
            setValue("");
        }
    }
    else{
        setError(true);
        setPrimary(false);
    }
    }

    const handleCopy=(index)=>{
        const temp=[...urls];
        temp.map((item)=>{
            if(index===item.id){
                item.copied=true;
            }
            else
                item.copied=false;
            return "";
        })
        setUrls(temp);
    }

    return (
        <ShortLinkContainer>
            <ShortLinkWrapper>
            <Form>
                <FormInput primary={primary} name="url" type="text" placeholder="Shorten a link here..." 
                        value={value} onChange={handleChange} />
                <Button fontBig primary onClick={handleSubmit}>Shorten it!</Button>
                </Form>
                {error?<EmptyInput>Please add a link.</EmptyInput>:""}
            
            </ShortLinkWrapper>
            <ShortLinkHistory>
            {loading?<Loading/>:
            errorLink?<p style={{color:"red"}}>{errorMessage}</p>:
            urls.map(item=>{
                return<ShortLinkItem key={item.id}>
                        
                        <OriginalLink>{item.originalUrl}</OriginalLink>
                        <hr/>
                        <NewLink href={item.newUrl} target="_blank"> {item.newUrl}</NewLink>
                       
                        <CopyButton copied={item.copied} primary onClick={() => { navigator.clipboard.writeText(item.newUrl);handleCopy(item.id)}} >{item.copied?"Copied":"Copy"}</CopyButton>
                     
                    </ShortLinkItem>
            })}
            </ShortLinkHistory>
            
        </ShortLinkContainer>
    )
}

export default ShortLink
