import React, { useState } from 'react'
import { Dimensions, FlatList, Image, View } from 'react-native'
import styles from './style'


const {width, height} = Dimensions.get('window')

function index({images} : {images:string[]} ) {
    const [activeIndex, setActiveIndex] = useState(0)

    const onViewRef = React.useRef((viewableItems)=> {
        if(viewableItems.viewableItems.length){
            setActiveIndex(viewableItems.viewableItems[0].index || 0)
        }
    })

    const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold:50})
    return (
    <View style={styles.container}>
        <FlatList 
            data={images}
            style={styles.flatList}
            renderItem={(item)=>(
                <Image 
                    key={item.index + "--image"}
                    source={{uri: item.item}}
                    style={styles.Image}  
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width*0.5}
            snapToAlignment={'center'}
            decelerationRate={"fast"}
            viewabilityConfig={viewConfigRef.current}
            onViewableItemsChanged={onViewRef.current}
        >
        </FlatList>
        <View>
            <View style={styles.pointContainer}>
                {images.map((image,index)=>(
                    <View key={index +"--point" } style={[styles.point,{backgroundColor:activeIndex==index ? '#5D3EBD': '#F2F0FD'}]} />
                ))}
            </View>
        </View>
    </View>

  )
}

export default index