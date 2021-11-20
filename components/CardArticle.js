import styled from "styled-components";

export default function CardArticle({ art }) {
  return (
    <CardNews>
      <div className="row">
        <div className="col-md-12">
          <img src={art.imageUrl} />
        </div>
        <div className="col-md-12">
          <h5>{art.title}</h5>
          <h6>
            <strong>{art.newsSite}</strong>
          </h6>
          <p>{art.summary}</p>
          <a href={art.url} target="_blank" rel="noreferrer">
            View Launch
          </a>
        </div>
      </div>
    </CardNews>
  );
}

const CardNews = styled.div`
  width: 100%;
  padding: 2em;
  border: 1px solid #dfe6e9;
  border-radius: 12px;
  margin: 1em 0;
  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0px 8px 10px #2d343671;
  }
  h5 {
    padding-top: 1em;
    font-weight: 700;
    color: #2d3436;
  }
  h6 {
    color: #6c5ce7;
  }
  p {
    color: #636e72;
  }
  a {
    text-decoration: none;
    color: #74b9ff;
  }
`;
