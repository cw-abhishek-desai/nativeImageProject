import React from 'react';
import { StyleSheet, View, Text, Image, Animated, Button } from 'react-native';
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';

export default function ImageCompont() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        }}>
            <Text>ReactNativeZoomableView</Text>
            <View style={{ borderWidth: 5, flexShrink: 1, height: 500, width: 310 }}>
                <ReactNativeZoomableView
                    maxZoom={3}
                    // Give these to the zoomable view so it can apply the boundaries around the actual content.
                    // Need to make sure the content is actually centered and the width and height are
                    // dimensions when it's rendered naturally. Not the intrinsic size.
                    // For example, an image with an intrinsic size of 400x200 will be rendered as 300x150 in this case.
                    // Therefore, we'll feed the zoomable view the 300x150 size.
                    contentWidth={300}
                    contentHeight={150}
                >
                    <Image
                        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                        source={{ uri: 'https://placekitten.com/400/200' }}
                    />

                </ReactNativeZoomableView>
            </View>
        </View>
    )
}