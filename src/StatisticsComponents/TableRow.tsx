import React from 'react'

type cardStat = {
    stat: string
    total?: number
    best?: number
    average?: number
}

const TableRow = (props: cardStat) => {

    let suffix = ''
    if (props.stat === 'TIME PLAYED') suffix = ' HRS'
    if (props.stat === 'WIN PERCENTAGE') suffix = '%'

    const [total, best, average, stat] = [props.total, props.best, props.average, props.stat].map(x => x?.toLocaleString())

  return (
    <div className="table-row" key={props.stat}>
            <h4 className="stat">{stat}</h4>
            <h4>{total}{suffix}</h4>
            <h4>{best}</h4>
            <h4>{average}</h4>
        </div>
  )
}

export default TableRow