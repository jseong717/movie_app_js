import React from 'react';

//#region FunctionComponent

//import PropTypes from 'prop-types';

// function JMTFood({fav})
// {
//   return <h1>I like {fav}</h1>;
// }

// function AllFood(value)
// {
//   return <h1>I like {value.fir}</h1>;
// }

// const gameILike =
// [
//   {
//     id : 1,
//     name : "RockmanZero",
//     image : "https://c2.staticflickr.com/8/7680/27308415125_e2bfdcf45f_o.jpg",
//     rating : 5
//   },
//   {
//     id : 2,
//     name : "FallOut",
//     image : "https://mblogthumb-phinf.pstatic.net/MjAxNzA4MDhfMTM3/MDAxNTAyMTgzODcxNjM0.JuoFSxZYIzuDQVe6Yqj_vjlfkxrhC9hM3jpLjVQi6Kog.r4V0dtTSESHbdgL-weCt7yWY64HiehuN6WkiNGI9sfEg.PNG.inh710/fallout-4.png?type=w2",
//     rating : 4.9
//   }
// ];

// function JMTGame({name, picture, rating})
// {
//   return (
//     <div>
//     <h1>JMT {name}</h1>
//     <h4>{rating}/5.0</h4>
//     <img src={picture} alt="Description" width="400px" height="200px" />
//     </div>
//   );
// }

// function RenderGame(pick)
// {
//   return (
//       <JMTGame 
//         key={pick.id} 
//         name={pick.name} 
//         picture={pick.image} 
//         rating={pick.rating}/>
//   );
// }

// JMTGame.propTypes =
// {
//   name : PropTypes.string.isRequired,
//   picture : PropTypes.string.isRequired,
//   rating : PropTypes.number
// }

// function App()
// {
//   return (
//     <div>
//       <h1>h1 Test</h1>
//       {/* 컴포넌트에 prop의 이름을 fav로 주고 치킨이라는 값을 넣음 */}
//       <JMTFood fav="치킨"></JMTFood>
//       <AllFood
//         fir="김치"
//         sec={true}
//         tir={[1, 2, 3, 4, true]}
//       />
//       {console.log(gameILike.map(RenderGame))}
//       {gameILike.map(RenderGame)}
//     </div>
//   )
// }

//#endregion

//#region ClassComponent

// class App extends React.Component
// {
//   constructor(props)
//   {
//     super(props);
//     console.log("constructor");
//   }

//   state = 
//   {
//     count : 0
//   };

//   Add = () =>
//   {
//     this.setState(current => ({count: current.count + 1}));
//   };
//   Minus = () =>
//   {
//     //이렇게 쓸수 있지만 추천하지 않는다
//     this.setState({count: this.state.count - 1});
//   };

//   componentDidMount()
//   {
//     console.log("componentDidMount");
//   }

//   componentDidUpdate()
//   {
//     console.log("componentDidUpdate");
//   }

//   componentWillUnmount()
//   {
//     console.log("compoentWillUnmount");
//   }

//   render()
//   {
//     console.log("Render");

//     return (
//         <div>
//           <h1>The number is: {this.state.count}</h1>
//           <button onClick={this.Add}>Add</button>
//           <button onClick={this.Minus}>Minus</button>
//         </div>
//       );
//   }
// }

//#endregion

//#region MovieComponent NoneCSS

// import axios from 'axios';
// import Movie from './Movie';

// class App extends React.Component
// {
//   state =
//   {
//     isLoading : true,
//     movies : []
//   };

//   getMovies = async () =>
//   {
//     const
//     {
//       data:
//       {
//         data: { movies }
//       }
//     } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
//     this.setState({ movies, isLoading : false })
//   }

//   componentDidMount()
//   {
//     //시간 지연
//     // setTimeout(() => {
//     //   this.setState({isLoading: false});
//     // }, 6000);

//     this.getMovies();
//   }

//   render()
//   {
//     const { isLoading, movies } = this.state;

//     return (
//       <div>
//         {isLoading 
//           ? "Loading..." 
//           : movies.map(movie => 
//                                 (
//                                   <Movie 
//                                       key={movie.id}
//                                       id={movie.id} 
//                                       year={movie.year} 
//                                       title={movie.title} 
//                                       summary={movie.summary} 
//                                       poster={movie.medium_cover_image}
//                                   />
//                                 )
//                       )
//         }
//       </div>
//     );
//   }
// }

//#endregion

//#region MovieComponent CSS

import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component
{
  state =
  {
    isLoading : true,
    movies : []
  };

  getMovies = async () =>
  {
    const
    {
      data:
      {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading : false })
  }

  componentDidMount()
  {
    //시간 지연
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // }, 6000);

    this.getMovies();
  }

  render()
  {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className = "loader">
            <span className = "loader__text">Loading...</span>
          </div>
        ) : (
          <div className = "movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

//#endregion

export default App;
