import React, {useState,useEffect} from 'react';
import '../../MainPage.css'
import {TableDisplay} from "../../components/table/TableDisplay";
import DisplayTableMission from "../../components/table/tableMission/DisplayTableMission";

export function SelectDriverMissionHook(props) {

    const [value, setValue] = useState('انتخاب کنید');
    const [missionValue, setMissionValue] = useState('انتخاب کنید');
    const [dataselect, setDataselect] = useState({});

    const val=props.val
   const handleChange=(event)=> {
       let a = val.filter(p => {
           return p.nameCar === event.target.value
       });
       let m = a.map(p => p.mission)
        setValue(event.target.value)
       setMissionValue(m)
       setDataselect(a[0])

   }
    const handleSubmit=()=> {
      let dtaselect= val.filter(f => {
            return f.nameCar===value
        })
        props.tableFilter(dtaselect[0], false)
    }

    useEffect(()=>{   if (props.TrackInfo) {
        setValue(props.TrackInfo[0].nameCar);

    }})
    return (
    <div>
        {console.log('hi')}
            <div className='row p-2 rtl mt-3 ' style={{width: '100%'}}>
                <form style={{width: '50%'}}>

                    <div className='form-group col-6'>
                        <span className=""> انتخاب ماشین:</span>
                        <select className="form-control form-control-dark mt-3" value={value}
                                onChange={handleChange} style={{width:1000}}>
                            <option>انتخاب کنید...</option>
                            {val.map(p => {
                                return <option value={p.nameCar}>{p.nameCar}</option>
                            })}
                        </select>
                    </div>
                    <div className='form-group col-6'>
                        <span className=""> انتخاب  ماموریت:</span>
                        <select className="form-control form-control-dark mt-3" value={value} style={{width:1000}}
                                onChange={handleChange}>
                            {val.filter(f => {
                                return f.nameCar===value
                            }).map(p=>{return  <option value={p.mission}>{p.mission }</option>  } )}

                        </select>
                    </div>
                </form>
                <div className='row p-2 rtl mt-3 mr-lg-5' style={{width: '100%'}}>
                    <button className='btn btn-primary ' onClick={handleSubmit}>نمایش اطلاعات</button>

                </div>
            </div>
        </div>
    )
}