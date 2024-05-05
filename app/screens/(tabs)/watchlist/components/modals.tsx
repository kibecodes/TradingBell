// import React, { useState } from 'react';
// import { Pressable, Text } from 'react-native';

// import { OrderCard, OrderLogo, Order, OrderNumbers } from './watchlist.styles';
// import { useTheme } from '../../../../Theme/theme';
// import ModalComponent from '../../../modal/[modal]';
// import ModalScreen from '../../../modal/components/modal.component';
// import { FetchedDataState, ModalDataProps } from '../watchlist';

// interface ModalsProps {
//   modalsData: FetchedDataState[];
// }

// export const ModalComponents: React.FC<ModalsProps> = ({ modalsData }) => {
//   console.log('opening component !');
//   const theme = useTheme();
//   const [modalData, setModalData] = useState<ModalDataProps>({
//     latestResult: {
//       o: 0,
//       c: 0,
//       v: 0,
//     },
//     latest: {
//       request_id: '',
//       ticker: '',
//     },
//     otherResults: {
//       results: [],
//       key: '',
//     },
//   });
//   const [modalVisible, setModalVisible] = useState(false);

//   const openModal = (data: ModalDataProps, id: string) => {
//     setModalVisible(true);
//     if (data.latest.request_id === id) {
//       setModalData(data);
//     }
//     return null;
//   };
//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   const modalItems: React.JSX.Element[] = [];

//   modalsData.forEach(({ currencyPairsData, stocksData }) => {
//     currencyPairsData.map(({ request_id, ticker, results }, index) => {
//       const lastResult = results[results.length - 1];
//       if (lastResult) {
//         modalItems.push(
//           <Pressable
//             key={`${request_id}-${index}`}
//             onPress={() =>
//               openModal(
//                 {
//                   latestResult: lastResult,
//                   latest: {
//                     request_id,
//                     ticker,
//                   },
//                   otherResults: {
//                     results: [],
//                     key: request_id,
//                   },
//                 },
//                 request_id,
//               )
//             }
//           >
//             <OrderCard
//               key={request_id}
//               style={{ backgroundColor: theme.colors.mainForeground }}
//             >
//               <OrderLogo></OrderLogo>
//               <Order>
//                 <Text
//                   style={{
//                     color: theme.colors.white,
//                     fontSize: theme.textVariants.trade.fontSize,
//                   }}
//                 >
//                   {ticker}
//                 </Text>
//                 <Text
//                   style={{
//                     color: theme.colors.grayText,
//                     fontSize: theme.textVariants.tradeInfo.fontSize,
//                   }}
//                 >
//                   Volume traded: {lastResult.v}
//                 </Text>
//               </Order>
//               <OrderNumbers>
//                 <Text
//                   style={{
//                     color: theme.colors.white,
//                     fontSize: theme.textVariants.trade.fontSize,
//                     fontWeight: '800',
//                   }}
//                 >
//                   open: {lastResult.o}
//                 </Text>
//                 <Text style={{ color: theme.colors.redPrimary }}>
//                   close: {lastResult.c}
//                 </Text>
//               </OrderNumbers>
//             </OrderCard>
//             {modalVisible && (
//               <ModalComponent
//                 isVisible={modalVisible}
//                 closeModal={closeModal}
//                 modalContent={
//                   modalData && <ModalScreen modalData={modalData} />
//                 }
//               />
//             )}
//           </Pressable>,
//         );
//       }
//     });
//     stocksData.map(({ request_id, ticker, results }, index) => {
//       const lastResult = results[results.length - 1];
//       if (lastResult) {
//         modalItems.push(
//           <Pressable
//             key={`${request_id}-${index}`}
//             onPress={() =>
//               openModal(
//                 {
//                   latestResult: lastResult,
//                   latest: {
//                     request_id,
//                     ticker,
//                   },
//                   otherResults: {
//                     results: [],
//                     key: request_id,
//                   },
//                 },
//                 request_id,
//               )
//             }
//           >
//             <OrderCard
//               key={request_id}
//               style={{ backgroundColor: theme.colors.mainForeground }}
//             >
//               <OrderLogo></OrderLogo>
//               <Order>
//                 <Text
//                   style={{
//                     color: theme.colors.white,
//                     fontSize: theme.textVariants.trade.fontSize,
//                   }}
//                 >
//                   {ticker}
//                 </Text>
//                 <Text
//                   style={{
//                     color: theme.colors.grayText,
//                     fontSize: theme.textVariants.tradeInfo.fontSize,
//                   }}
//                 >
//                   Volume traded: {lastResult.v}
//                 </Text>
//               </Order>
//               <OrderNumbers>
//                 <Text
//                   style={{
//                     color: theme.colors.white,
//                     fontSize: theme.textVariants.trade.fontSize,
//                     fontWeight: '800',
//                   }}
//                 >
//                   open: {lastResult.o}
//                 </Text>
//                 <Text style={{ color: theme.colors.redPrimary }}>
//                   close: {lastResult.c}
//                 </Text>
//               </OrderNumbers>
//             </OrderCard>
//             {modalVisible && (
//               <ModalComponent
//                 isVisible={modalVisible}
//                 closeModal={closeModal}
//                 modalContent={
//                   modalData && <ModalScreen modalData={modalData} />
//                 }
//               />
//             )}
//           </Pressable>,
//         );
//       }
//     });
//   });
//   return <>{modalItems}</>;
// };
