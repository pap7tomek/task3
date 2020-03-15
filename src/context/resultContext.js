import React from 'react'

const ResultContext = React.createContext()

export const ResultProvider = ResultContext.Provider
export const ResultConsumer = ResultContext.Consumer

export default ResultContext