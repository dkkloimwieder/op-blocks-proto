import { Component } from "solid-js";

const Blocks: Component = () => {
  const randomWord = (maxWords: number) => {
    const consonants = "bcdfghjklmnpqrstvwxzy".split("");
    const vowels = "aaeeeiioouuy".split("");
    const max = Math.floor(Math.random() * maxWords) + 3;
    let word: string = "";

    for (let i = 0; i < max / 2; i++) {
      const randConsonant =
        consonants[Math.floor(Math.random() * consonants.length)];
      const randVowel = vowels[Math.floor(Math.random() * vowels.length)];
      if (Math.random() >= 0.45) {
        word += i === 0 ? randConsonant.toUpperCase() : randConsonant;
        word += i < max / 2 - 1 ? randVowel : "";
      } else if (Math.random() > 0.2) {
        word += i === 0 ? randVowel.toUpperCase() : randVowel;
        word += i < max / 2 - 1 ? randConsonant : "";
      } else {
        word +=
          i === 0 ? randVowel.toUpperCase() : i < max / 2 - 1 ? randVowel : "";
      }
    }

    return word;
  };
  const randomWords = (maxWords: number, maxLength: number) => {
    let words: string = "";
    const length = Math.floor(Math.random() * maxLength) + 1;
    for (let i = 0; i < length; i++) {
      words +=
        Math.random() > 0.15 || i === length - 1
          ? randomWord(maxWords) + " "
          : randomWord(maxWords) + "-";
    }
    return words.trim();
  };

  return (
    <>
      <section class="card-one">
        <div class="card">
          <div class="cap">
            <h3>{randomWords(8, 1)}?</h3>
          </div>
          <div class="body">
            <h5>{randomWords(8, 3)}!</h5>
            <p>{randomWords(8, 15)}.</p>
            <a href="#">{randomWords(8, 1)}...</a>
          </div>
        </div>

        <div class="card">
          <div class="cap">
            <h3>{randomWords(8, 1)}?</h3>
          </div>
          <div class="body">
            <h5>{randomWords(8, 3)}</h5>
            <p>{randomWords(8, 15)}.</p>
            <a href="#">{randomWords(8, 1)}...</a>
          </div>
        </div>
        <div class="card">
          <div class="cap"></div>
          <div class="body">
            <h5>{randomWords(8, 3)}</h5>
            <p>{randomWords(8, 15)}</p>
            <a href="#">{randomWords(8, 1)}...</a>
          </div>
        </div>
        <div class="card">
          <div class="cap"></div>
          <div class="body">
            <h5>{randomWords(8, 3)}</h5>
            <p>{randomWords(8, 15)}</p>
            <a href="#">{randomWords(8, 1)}...</a>
          </div>
        </div>
        <div class="card">
          <div class="cap"></div>
          <div class="body">
            <h5>{randomWords(8, 3)}</h5>
            <p>{randomWords(8, 15)}</p>
            <a href="#">{randomWords(8, 1)}...</a>
          </div>
        </div>
      </section>
      <hr />
      <section class="card-two">
        <div class="card">
          <div class="cap">
            <h3>{randomWords(8, 1)}</h3>
          </div>
          <div class="body">
            <h5>{randomWords(8, 3)}</h5>
            <p>{randomWords(8, 15)}</p>
            <a href="#">{randomWords(8, 1)}...</a>
          </div>
        </div>

        <div class="card">
          <div class="cap">
            <h3>{randomWords(8, 1)}</h3>
          </div>
          <div class="body">
            <h5>{randomWords(8, 2)}</h5>
            <p>{randomWords(8, 15)}</p>
            <a href="#">{randomWords(8, 1)}...</a>
          </div>
        </div>
        <div class="card">
          <div class="cap"></div>
          <div class="body">
            <h5>{randomWords(8, 2)}</h5>
            <p>{randomWords(8, 15)}</p>
            <a href="#">{randomWords(8, 1)}...</a>
          </div>
        </div>
        <div class="card">
          <div class="cap"></div>
          <div class="body">
            <h5>{randomWords(10, 2)}</h5>
            <p>{randomWords(10, 15)}</p>
            <a href="#">{randomWords(8, 1)}...</a>
          </div>
        </div>
        <div class="card">
          <div class="cap"></div>
          <div class="body">
            <h5>{randomWords(10, 2)}</h5>
            <p>{randomWords(10, 15)}</p>
            <a href="#">{randomWords(8, 1)}...</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blocks;
