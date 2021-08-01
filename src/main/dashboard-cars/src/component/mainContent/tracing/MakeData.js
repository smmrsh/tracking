import {TableData} from "../TableData";



export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        return TableData.map(d => {
            return {
                ...d,

            }
        })
    }

    return makeDataLevel()
}