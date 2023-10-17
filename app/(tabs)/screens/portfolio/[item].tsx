import { useQuery, gql } from '@apollo/client';
import { View, Text } from 'react-native';

interface CompanyProps {
    index: number,
    symbol: string,
    close: number,
    preMarket: number,
} 

const GET_COMPANIES = gql`
  query getCompanies {
    companies {
        index,
        symbol,
        close,
        preMarket
    }
  }
`

export default function DisplayCompanies () {
    const { loading, error, data } = useQuery(GET_COMPANIES);

    if(loading) return <Text>Loading ...</Text>;
    if(error) return <Text>Error: {error.message}</Text>;

    return data.companies.map(({ index, symbol, close, preMarket }: CompanyProps) => (
        <View key={index} style={{ padding: 10 }}>
            <Text style={{ color: 'black', fontSize: 24 }}>{symbol}</Text>
            <Text>About this company:<Text> close price: {close}, preMarket price: {preMarket}</Text></Text>
        </View>

    ))
}