// Components/Search.js

import React from 'react';
import{ Text, FlatList, StyleSheet, View, TextInput, Button } from 'react-native';

import FilmsItems from './filmsItems'
import {RechercheFilm} from '../API/TMDBApi.js'
import Chargement from './IconeChargement'
import DetailsFilms from './DetailsFilms'
class Search extends React.Component {
  constructor(props){
    super(props)
    this.textInput = ""
    this.state = { films :  [], charge : "false"}
    this.pages = 0
    this.Totalpages = 0
  }

  _loadFilms(){
    if(this.textInput.length>0)
    {

      this.setState({charge: "true"})
      RechercheFilm(this.textInput, this.pages+1).then(data => {
      this.pages = data.page
      this.Totalpages = data.total_pages
      this.setState({films : [ ...this.state.films, ...data.results]})
      this.setState({charge : "false"})


      });
    }
  }

  _rechercherFilmsAvecTexte(text)
  {
    this.textInput = text
  }

  _Chargement(){
    if(this.state.charge == "true")
    {
        return(
            <Chargement/>

        )
    }


  }

  _FinDeListe(){
      if(this.pages < this.Totalpages)
      {
        this._loadFilms()
      }
  }

  _nouvelleRecherche()
{
    this.pages = 0
    this.Totalpages = 0
    this.setState({films : []}, () => {this._loadFilms()})
}


_displayDetailForFilm = (idFilm) => {
  console.log("Display film with id " + idFilm)
        this.props.navigation.navigate("Détails", { idFilm: idFilm })
}



  render() {


    return (

      <View style={{flex:1}}>

        <TextInput style={styles.textinput}
         placeholder='Titre du film' onChangeText={(texte) => this._rechercherFilmsAvecTexte(texte)} onSubmitEditing={() => this._nouvelleRecherche()}/>
        <Button title='Rechercher' onPress={() => this._nouvelleRecherche()}/>
        <FlatList
         data={this.state.films}
         keyExtractor={(item) => item.id.toString()}
         onEndReachedThreshold = {1}
         onEndReached = {() => this._FinDeListe()}
         renderItem={({item}) => <FilmsItems film ={item} AfficherDetailsFilms= {this._displayDetailForFilm}/>}
       />
       {this._Chargement()}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  textinput : {
   marginLeft:5,
   marginRight: 5,
   height:50,
   borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }

})
export default Search
