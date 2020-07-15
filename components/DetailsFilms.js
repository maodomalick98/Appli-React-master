// Components/FilmDetail.js

import React from 'react'
import { Image,ScrollView, Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import Chargement from './IconeChargement'
import { DetailFilm, ImagesFilms } from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'

class DetailFilms extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      film: [], // Pour l'instant on n'a pas les infos du film, on initialise donc le film à undefined.
      isLoading: true // A l'ouverture de la vue, on affiche le chargement, le temps de récupérer le détail du film
    }
  }


  componentDidMount() {
          DetailFilm(this.props.route.params.idFilm).then(data => {
            this.setState({
              film: data,
              isLoading: false
            })
          })
      }


  _Chargement(){
    if(this.state.isLoading == "true")
    {
        return(
            <Chargement/>

        )
    }


  }

  _AfficherFilm() {
    const { film } = this.state
   if (film != undefined) {
     return (
       <ScrollView style={styles.scrollview_container}>
         <Image
           style={styles.image}
           source={{uri: ImagesFilms(film.backdrop_path)}}
         />
         <Text style={styles.title_text}>{film.title}</Text>
         <Text style={styles.description_text}>{film.overview}</Text>
         <Text style={styles.default_text}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
         <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
         <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
         <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
         <Text style={styles.default_text}>Genre(s) :
         </Text>
         <Text style={styles.default_text}>Companie(s) :
         </Text>
       </ScrollView>
     )
   }
 }



  render() {
    return (
      <View style={styles.main_container}>
        {this._Chargement()}
        {this._AfficherFilm()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
})


export default DetailFilms
