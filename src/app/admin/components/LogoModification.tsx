'use client'
import React, { useState, useMemo, useEffect, memo } from 'react';
import { Button, IconButton } from '@mui/material';
import { IoAddOutline } from "react-icons/io5";
import { Input } from '@nextui-org/react';
import { TiDelete } from "react-icons/ti";
import { firestoreDB } from '@/firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
const LogoModification: React.FC = () => {
    const [addMore, setAddMore] = useState([{
        value: ''
    }]);
    const [data, setData] = useState<(number[] | string[])>([]);
    const [delay, setDelay] = useState<string>('1000');
    const filterShowingText = () => {
        let arr: (string | number | any) = [];
        const filteredValues = addMore?.filter(text => {
            return text?.value?.length > 0;
        });
        filteredValues?.forEach((element) => {
            let currentValue: string = element?.value;
            arr.push(currentValue, Number.parseInt(delay || '1000'));
        });
        setData(arr);
    };

    const handleRemove = (index: number): void => {
        setAddMore(prev => {
            prev.splice(index, 1);
            return [...prev];
        });
    }

    const handleChangeLogoTitle = async () => {
        console.log(data);
        if (data?.length) {
            console.log(data,'3')
            try {
                const res = await addDoc(collection(firestoreDB,'logoTitle'),{
                    titles : data
                });
                alert('Change Title Successfull');
            } catch (error) {
                alert('Data not submit');
            }
        } else {
            alert('Please fill the title');
        }
    };

    useEffect(() => {
        filterShowingText();
    }, [addMore, delay]);
    const fields = useMemo(() => {
        return addMore?.map((field, index) => {
            return (
                <React.Fragment key={index}>
                    <Input endContent={
                        <IconButton onClick={() => {
                            handleRemove(index);
                        }} size='small' color='error'>
                            <TiDelete />
                        </IconButton>
                    } className='my-1' size='sm' labelPlacement='outside' value={field?.value} label={`Showing Text ${index + 1}`} placeholder='write showing text' onChange={(e) => {
                        setAddMore((prev) => {
                            prev[index].value = e?.target?.value;
                            return [...prev];
                        })
                    }} />
                </React.Fragment>
            )
        })
    }, [addMore]);
    return (
        <div>
            <h1 className='font-mono text-xl font-semibold'>Logo Name Modification</h1>
            <Button
                startIcon={<IoAddOutline />}
                color='primary'
                variant='contained'
                size='small'
                className='my-2'
                onClick={() => {
                    if (addMore?.length >= 5) {
                        alert('No more added');
                    } else {
                        setAddMore((prev) => {
                            return [...prev, {
                                value: ''
                            }]
                        })
                    }
                }}
            >
                Add
            </Button>
            <div className='flex flex-col gap-2 md:max-w-[400px] mt-3'>
                {fields}
                <Input className='my-1' size='sm' labelPlacement='outside' value={delay} label={`Chosse text delaytion`} placeholder='Set Delay' onChange={(e) => {
                    setDelay(e?.target?.value);
                }} />
            </div>
            <Button
                color='primary'
                variant='contained'
                className='my-4'
                onClick={handleChangeLogoTitle}
            >
                Change Title
            </Button>
        </div>
    )
}

export default memo(LogoModification);
