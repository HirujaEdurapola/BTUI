import "./src/post.css"
import "./src/main.css"

function Post(){
    return(
        <>
        <div className="main-hero">
            <div className="child-hero">
                <h1 className="post-txt">So, What are you waiting for?</h1>
                <a href="https://flightsimulator.com/"><button className="post-btn">Play Now</button></a>
                <div className="bgfooter">
            <div className="footer">
            <h1 className="txt-footer">Created by Hiruja Edurapola</h1>
            <h1 className="txt-footer">All of the logos and tradmarks used are properities of respective owners.</h1>
            <h1 className="txt-footer"><a href="/credits.html">Credits</a></h1>
            </div>
        </div>
            </div>
        </div>
        </>
    )
}

export default Post