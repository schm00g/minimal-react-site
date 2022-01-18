const navbar = (
    // this is JSX i.e. HTML in JS
    <nav>
        <h1>Places to visit</h1>
        <ol>
            <li><a href="https://www.google.com/search?q=WTF+is+JSX">Place A</a></li>
            <li><a href="https://www.google.com/search?q=WTF+is+JSX">Place B</a></li>
            <li><a href="https://www.google.com/search?q=WTF+is+JSX">Place C</a></li>
        </ol>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)