import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//하나의 변수를 받아올때는 {}이것을 무조건 붙여줘야 된다
//이게 없을경우 하나의 오브젝트를 통째로 받아오는데 id이외의 값들은 전부
//없는것으로 판단되어서 오류는 없고 화면에는 아무것도 표시가 안된다
function Movie({year, title, summary, poster, genres})
{
    return  (
                <div className="movies__movie">
                    <img className="movie__poster" src={poster} alt={title} title={title}/>
                    <div className="movies__data">
                        {/*이런식으로도 스타일 주기 가능 css사용안함*/}
                        {/* <h3 class="movie__title" style={{backgroundColor:"red"}}>{title}</h3> */}
                        <h3 className="movie__title">{title}</h3>
                        <h5 className="movie__year">{title}</h5>
                        <p className="movie__summary">{summary.slice(0, 140)}...</p>
                        <ul className="movie__genres">
                            {genres.map((genre, index) => (
                                <li key={index} className="genres__genre">Type{index} : {genre}</li>
                                ))}
                        </ul>
                    </div>
                </div>
            );
}

Movie.propTypes =
{
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired
};

export default Movie;