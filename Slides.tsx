// first Slide
  <View style={{ marginTop: hp(2.5) }}>
          <Text style={[styles.textStyle, { fontSize: hp("1.9%") }]}>
            Hi and welcome to inspection
          </Text>
          <Text
            style={[
              styles.textStyle,
              { fontSize: hp("2%"), marginTop: hp(0.2) },
            ]}
          >
            Today are you going to
          </Text>
        </View>
        <View style={{ marginTop: hp(4) }}>
          <Text style={[styles.textStyle, { fontSize: hp("1.9%") }]}>
            Take photos of how guest left
          </Text>
          <Text
            style={[
              styles.textStyle,
              { fontSize: hp("2%"), marginTop: hp(0.2) },
            ]}
          >
            Clean as the instructions guides you
          </Text>
          <Text
            style={[
              styles.textStyle,
              { fontSize: hp("2%"), marginTop: hp(0.2) },
            ]}
          >
            Update with new photos
          </Text>
        </View>
        <View style={{ marginTop: hp(4) }}>
          <Text style={[styles.textStyle, { fontSize: hp("1.5%") }]}>
            Watch this video if to get a introduction
          </Text>
          <Text
            style={[
              styles.textStyle,
              { fontSize: hp("1.4%"), marginTop: hp(0.2) },
            ]}
          >
            of how this app works
          </Text>
        </View>
        <View
          style={{
            width: wp(80),
            marginTop: hp(10),
            backgroundColor: "pink",
            height: hp(30),
            alignItems: "center",
            justifyContent: "center",
            borderRadius:20,
          }}
        >
          <Ionicons name="ios-play-circle" size={84} color="yellow" />
          
        </View>
        -----------------------------------------------------------------------------------------------------------------------------------------------------------
         <View>
            <View>
              <TouchableOpacity style={{}}>
                <Text style={styles.textStyle}>Retake Photo</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.textStyle}>Inpection FeedBack</Text>
            </View>
            <View>
              <Accodion accodionTitle="Table is Scratchy" id={1} />
            </View>
            <View></View>
          </View>