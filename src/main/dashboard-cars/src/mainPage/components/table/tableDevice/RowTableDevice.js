import {TableData} from "../TableData";



export default function rowTable(...lens) {
    const makeDataLevel = (depth = 0) => {
        return TableData.map(d => {
            return {
                ...d,

            }
        })
    }

    return makeDataLevel()
}