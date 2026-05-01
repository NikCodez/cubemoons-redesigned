function CTA(){
    return (
      <>
        {/* TOP CTA SECTION */}
        <section className="contact-cta">
          <div className="cta-container">
            
            <div className="cta-left">
              <h2>
                Be Part of the Journey Stay <br />
                Connected With Us
              </h2>
              <p>
                Get exclusive updates and content you won’t find anywhere else.
              </p>
            </div>

            <div className="cta-right">
              <div className="input-box">
                <input type="email" placeholder="youremail@gmail.com" />
                <button>Submit →</button>
              </div>
              <span className="small-text">
                Thoughtfully curated updates, delivered occasionally.
              </span>
            </div>

          </div>
        </section>
        </>
    );
}

export default CTA;