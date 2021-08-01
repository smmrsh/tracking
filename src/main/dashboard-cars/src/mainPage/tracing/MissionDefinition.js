import react, {Component} from 'react';
import '../MainPage.css';
import React from "react";
import {Fontcolor} from "../../Config";
import {DatePicker} from "../dashboard/chartDate/DatePicker";
import MapDirection3 from "../components/map/MapDirection3";
import MapDirection1 from "../components/map/MapDirection1";
import MapDirectionSelectArea from "../components/map/MapDirectionSelectArea";
import Select from 'react-select';

const optionskhodro = [
    {value: 'کیان700', label: 'کیان700'},
    {value: 'تریلی 856', label: 'تریلی 856'},
    {value: 'کامیون 124', label: 'کامیون 124'},
    {value: 'تریلی 356', label: 'تریلی 356'},
    {value: 'وانت باری258', label: 'وانت باری258'},
    {value: 'کامیون 445', label: 'کامیون 445'},
];const optionsMission = [
    {value: 'شاهرود_مشهد کد9632', label: 'شاهرود_مشهد کد9632'},
    {value: 'اصفهان_شیراز9630', label: 'اصفهان_شیراز9630'},
    {value: 'تهران_تبریزکد568', label: 'تهران_تبریزکد568'},
    {value: 'تهران-اصفهان کد9633', label: 'تهران-اصفهان کد9633'},
    {value: 'اصفهان_یزدکد9631', label: 'اصفهان_یزدکد9631'},
]
;const optionsDriver = [
    {value: 'سعیدسعیدی', label: 'سیروان خسروی'},
    {value: 'احمداقبالی', label: 'ابوالحسن یعقوبی'},
    {value: 'جواد خیابانی', label: 'جواد خیابانی'},
    {value: 'غیب الله مهدوی', label: 'غیب الله مهدوی'},
    {value: 'احمداقبالی', label: 'احمداقبالی'},
];const optionsSpeed = [
    {value: '110', label: '110'},
    {value: '100', label: '100'},
    {value: '80', label: '80'},
];

const optionsFuel = [
    {value: '700', label: '700'},
    {value: '600', label: '600'},
    {value: '500', label: '500'},
];

export class MissionDefinition extends Component {
    constructor(props) {
        super(props);
        this.state = {valueBiginOrDestination: '', value: 'انتخاب ماموریت', valueInput: '', selectedOption: null};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    viewMapGeographicalArea = () => {
        this.setState({geographicalArea: true, stationPoint: false})

    }
    viewMapStationPoint = () => {
        this.setState({geographicalArea: false, stationPoint: true})
    }
    valuechangBeginning = (e) => {
        if (e.target.value === 'انتخاب از روی نقشه') {
            this.setState({geographicalArea: false, stationPoint: true, valueBiginOrDestination: 'start'})
        } else {
            this.setState({geographicalArea: false, stationPoint: false})
        }
    }
    valuechangDestination = (e) => {
        if (e.target.value === 'انتخاب از روی نقشه') {
            this.setState({geographicalArea: false, stationPoint: true, valueBiginOrDestination: 'end'})
        } else {
            this.setState({geographicalArea: false, stationPoint: false})
        }
    }
    disableSelectInput = (e) => {
        this.setState({})
    }

    render() {
        const customStyles = {
            singleValue: (provided,state) => ({
            ...provided,
                    color: state.isFocused ? "#000" : "#fff",

            }),
            control: (base, state) => ({
                ...base,
                background: state.menuIsOpen ? "#fff" : "#5a6064",
                // match with the menu
                borderRadius:  3,
                border:'none',
                // Overwrittes the different states of border
                // Removes weird border around container
                boxShadow: state.isFocused ? null : null,
                "&:hover": {
                    // Overwrittes the different states of border
                },

                color: state  ? "#fff" : "#000",


            }),

            placeholder: (defaultStyles) => {
                return {
                    ...defaultStyles,
                    color: '#ffffff',
                }
            },

            menu: (base,state) => ({
                ...base,
                // override border radius to match the box
                borderRadius: 0,
                // kill the gap
                marginTop: 0
            }),
            menuList: (base,state) => ({
                ...base,
                // kill the white space on first and last option
                padding: 0,
                color: state.isSelected ? "#fff" : "#000",
            }),
            option: (provided, state) => ({
                ...provided,

            }),
        }
        return (
            <div className="container border border-secondary ">
                <div id='scrollSpayMissionDMap'
                     className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 id='' className="h5 text-light">پیش تعریف ماموریت</h5>
                </div>

                {this.state.geographicalArea ? <MapDirectionSelectArea/> : null}
                {this.state.stationPoint ?
                    <MapDirection3 valueBiginOrDestination={this.state.valueBiginOrDestination}/> : null}
                <div className="row   p-5 rounded btnScrollSpy " id='scrollSpayMissonDefinition'>
                    <form onSubmit={this.handleSubmit}>
                        <a href='#scrollSpayMissionDMap'>
                            <button onClick={this.viewMapGeographicalArea}
                                    className='btn btn-outline-success mb-3 mr-2 mt-3'>انتخاب محدوده مجاز از روی نقشه
                            </button>
                        </a>
                        <div className="row mt-3 divSelect">
                            <div className="col-6 mb-3  ">
                                <label className='mb-3' htmlFor="partId" style={{color: Fontcolor}}> انتخاب
                                    خودرو</label>
                                <Select
                                    options={optionskhodro} isDisabled={false} isClearable={true} isLoading={false}
                                    isRtl={true} isSearchable={true}
                                    className={'aa'}
                                    placeholder={'انتخاب خودرو...'}
                                    styles={customStyles}
                                />

                            </div>
                            <div className="col-6 mb-3">
                                <label className='mb-3' htmlFor="partId" style={{color: Fontcolor}}>انتخاب
                                    ماموریت</label>
                                <Select
                                    options={optionsMission} isDisabled={false} isClearable={true} isLoading={false}
                                    isRtl={true} isSearchable={true}
                                    className={'aa'}
                                    placeholder={'انتخاب ماموریت...'}
                                    styles={customStyles}
                                />

                            </div>
                            <div className="col-6 mb-3">
                                <label className='mb-3' htmlFor="partId" style={{color: Fontcolor}}>انتخاب
                                    راننده</label>

                                <Select
                                    options={optionsDriver} isDisabled={false} isClearable={true} isLoading={false}
                                    isRtl={true} isSearchable={true}
                                    className={'aa'}
                                    placeholder={'انتخاب راننده...'}
                                    styles={customStyles}
                                />

                            </div>

                        </div>
                        <div className="row mt-3">
                            <div className="col-6 mb-3">
                                <label className='mb-3' htmlFor="partId" style={{color: Fontcolor}}> مبدا</label>
                                <select className="custom-select d-block w-100 form-control-dark" id="partId"
                                        onChange={this.valuechangBeginning}
                                        required="">
                                    <option value=""> انتخاب ایستگاه</option>
                                    <option>انتخاب از روی نقشه</option>
                                    <option>ایستگاه اصفهان</option>
                                    <option>ایستگاه تبریز</option>
                                    <option>ایستگاه تهران</option>
                                    <option>ایستگاه شاهرود</option>
                                    <option>ایستگاه مشهد</option>
                                    <option>ایستگاه یزد</option>
                                </select>

                            </div>
                            <div className="col-6 mb-3">
                                <label className='mb-3' htmlFor="partId" style={{color: Fontcolor}}> مقصد</label>
                                <select className="custom-select d-block w-100 form-control-dark" id="partId"
                                        onChange={this.valuechangDestination}
                                        required="">
                                    <option value=""> انتخاب ایستگاه</option>
                                    <option>انتخاب از روی نقشه</option>
                                    <option>ایستگاه اصفهان</option>
                                    <option>ایستگاه تبریز</option>
                                    <option>ایستگاه تهران</option>
                                    <option>ایستگاه شاهرود</option>
                                    <option>ایستگاه مشهد</option>
                                    <option>ایستگاه یزد</option>
                                </select>

                            </div>

                        </div>
                        <div className="row mt-3 ">
                            <div className="col-6 mb-3">
                                <label className='mb-3' htmlFor="partId" style={{color: Fontcolor}}> تاریخ شروع</label>
                                <div className="p-2"><DatePicker/></div>
                            </div>
                            <div className="col-6 mb-3">
                                <label className='mb-3' className='mb-3' htmlFor="partId"
                                       style={{color: Fontcolor}}> تاریخ پایان</label>
                                <div className="p-2"><DatePicker/></div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="form-group">
                                <label className='mb-3' htmlFor="partId" style={{color: Fontcolor}}> حداکثر سرعت</label>
                                <div className="input-group  " style={{width:390}}>
                                    <input id="wrapped"
                                           className="form-control   form-control-dark disabled"
                                           type="text"
                                           placeholder=" کیلومتر... "
                                           name="wrapped"
                                           onfocusin={this.disableSelectInput}
                                    />
                                    <div className="input-group-addon" style={{width:189}}>
                                        <Select
                                            options={optionsSpeed} isDisabled={false} isClearable={true} isLoading={false}
                                            isRtl={true} isSearchable={true}
                                            className={'aa'}
                                            placeholder={' انتخاب به کیلومتر...'}
                                            styles={customStyles}
                                        />

                                    </div>
                                </div>



                            </div>


                        </div>
                        <div className="row mt-3">

                                <div className="form-group">
                                    <label className='mb-3' htmlFor="partId" style={{color: Fontcolor}}>مصرف سوخت </label>
                                    <div className="input-group  " style={{width:390}}>
                                        <input id="wrapped"
                                               className="form-control   form-control-dark disabled"
                                               type="text"
                                               placeholder=" لیتر... "
                                               name="wrapped"
                                               onfocusin={this.disableSelectInput}
                                        />
                                        <div className="input-group-addon" style={{width:189}}>
                                            <Select
                                                options={optionsFuel} isDisabled={false} isClearable={true} isLoading={false}
                                                isRtl={true} isSearchable={true}
                                                className={'aa'}
                                                placeholder={' انتخاب به لیتر...'}
                                                styles={customStyles}
                                            />

                                        </div>
                                    </div>



                            </div>

                        </div>
                        <div className="row mt-3  ">
                            <div className="col text-center ">
                                <button type="button"
                                        className="bg-primary btn  btn-outline-secondary text-white w-50 mt-3">
                                    ثبت
                                </button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        );
    }
}