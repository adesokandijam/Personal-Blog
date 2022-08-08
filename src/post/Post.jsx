import "./post.css"

export default function Post
() {
  return (
    <div className='post'>
      <img className="postImg"
      src="https://static.dw.com/image/61716414_101.jpg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle"> My first post to be designed by me</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ad consequat ut aliqua ad non sunt enim.Reprehenderit velit adipisicing consectetur laboris nulla qui exercitation exercitation ut Lorem. Eu quis aliquip cupidatat excepteur proident eu cillum anim officia laborum sit. Tempor nulla aute amet id dolore exercitation irure pariatur nisi. Ut ut irure in sunt et qui veniam adipisicing occaecat veniam ipsum sint velit esse. Proident tempor pariatur et magna ut do nulla officia commodo id id ex exercitation proident. Est enim ex culpa anim sit ea ex enim eiusmod quis quis.
      </p>
    </div>
  )
}
