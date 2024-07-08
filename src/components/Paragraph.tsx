// primera sección parrafos,
import "./paragraph.css";

export function Paragraph() {
  return (
    <>
      <div className="breadcrum">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a>Breadcrumb 1</a>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              id="breadcrumbs"
            >
              Breadcrumb 1.1
            </li>
          </ol>
        </nav>
      </div>
      <div className="paragraph">
        <h1>Heading 1</h1>
        <h3>Heading 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
          luctus lectus, sit amet congue libero. Sed mauris massa, rhoncus nec
          semper a, accumsan in tellus. Suspendisse potenti. Aenean iaculis non
          nibh eu ultrices. Pellentesque quis risus dictum, interdum enim at,
          faucibus turpis. Suspendisse a dictum quam. Vestibulum nisi massa,
          tempor sit amet elit et, sagittis vehicula eros. Nulla id faucibus
          sem, interdum maximus lorem. In id elit et ipsum vulputate accumsan.
        </p>
        <h3>Heading 2</h3>
        <ul>
          <li>
            <svg
              id="file-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#538E9C"
              className="bi bi-file-earmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
            </svg>
            file-one.pdf
          </li>
          <li>
            <svg
              id="file-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#538E9C"
              className="bi bi-file-earmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
            </svg>
            file-four.pdf
          </li>
          <li>
            <svg
              id="file-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#538E9C"
              className="bi bi-file-earmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
            </svg>
            file-seven.pdf
          </li>
          <li>
            <svg
              id="file-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#538E9C"
              className="bi bi-file-earmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
            </svg>
            file-two.pdf
          </li>
          <li>
            <svg
              id="file-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#538E9C"
              className="bi bi-file-earmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
            </svg>
            file-five.pdf
          </li>
          <li>
            <svg
              id="file-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#538E9C"
              className="bi bi-file-earmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
            </svg>
            file-eight.pdf
          </li>
          <li>
            <svg
              id="file-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#538E9C"
              className="bi bi-file-earmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
            </svg>
            file-three.pdf
          </li>
          <li>
            <svg
              id="file-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#538E9C"
              className="bi bi-file-earmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
            </svg>
            file-six.pdf
          </li>
        </ul>
      </div>
    </>
  );
}
