import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import logoWebp from '../assets/image/logo.webp';
import '../assets/css/Home.css';

export default function Home({ onOpenFeedback, onShowToast }) {
  // Contact form state
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [msg, setMsg] = useState('');
  const [isContactSuccess, setIsContactSuccess] = useState(false);

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.12 }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);


  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!fname.trim() || !email.trim() || !msg.trim()) {
      onShowToast('Please fill required fields.');
      return;
    }

    setIsContactSuccess(true);
    const body = `Name: ${fname} ${lname}%0AEmail: ${email}%0AService: ${service}%0A%0A${msg}`;
    
    // Smooth transition before mail client opens
    setTimeout(() => {
      window.location.href = `mailto:closelyinfotech@gmail.com?subject=Project Enquiry from ${fname}&body=${body}`;
      
      // Reset form states
      setFname('');
      setLname('');
      setEmail('');
      setService('');
      setMsg('');
      setIsContactSuccess(false);
    }, 1500);
  };

  const handleScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-wrapper">
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="grid-lines"></div>
        </div>

        {/* Centered Rotating Logo Graphic */}
        <div className="hero-graphic-wrap">
          <img 
            src={logoWebp} 
            alt="Rotating Logo Graphic" 
            className="hero-scroll-logo"
          />
        </div>

        <div className="hero-inner reveal">
          <div className="hero-badge">
            <div className="badge-dot"></div> Innovating · Building · Growing
          </div>
          <h1>
            We build digital<br />
            <span className="line2">solutions</span> that make<br />
            <span className="line3">businesses grow</span>
          </h1>
          <p className="hero-sub">
            Custom software, stunning web apps, mobile solutions, cloud infrastructure — everything your business needs to thrive in the digital age.
          </p>
          <div className="hero-btns">
            <button className="btn-main" onClick={() => handleScrollTo('contact')}>
              Start a Project &nbsp;&#x2192;
            </button>
            <button className="btn-outline" onClick={() => handleScrollTo('services')}>
              Explore Services
            </button>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stat reveal">
          <div className="stat-num">50+</div>
          <div className="stat-lbl">Projects Delivered</div>
        </div>
        <div className="stat reveal">
          <div className="stat-num">30+</div>
          <div className="stat-lbl">Happy Clients</div>
        </div>
        <div className="stat reveal">
          <div className="stat-num">8</div>
          <div className="stat-lbl">Core Services</div>
        </div>
        <div className="stat reveal">
          <div className="stat-num">100%</div>
          <div className="stat-lbl">Client Focused</div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services">
        <div className="sec-wrap">
          <div className="sec-eyebrow reveal">What We Do</div>
          <div className="sec-title reveal">End-to-end digital services</div>
          <p className="sec-sub reveal">
            From idea to deployment — we cover every layer of your digital product.
          </p>
          <div className="services-grid">
            <div className="svc-card reveal">
              <div className="svc-icon-wrap teal"><i className="fas fa-code"></i></div>
              <div className="svc-title">Custom Software Development</div>
              <div className="svc-desc">Tailor-made applications engineered around your exact business logic, workflows, and growth plans.</div>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon-wrap navy"><i className="fas fa-globe"></i></div>
              <div className="svc-title">Web Application Development</div>
              <div className="svc-desc">Fast, scalable web apps built with modern frameworks — clean, maintainable, and production-ready.</div>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon-wrap gold"><i className="fas fa-mobile-alt"></i></div>
              <div className="svc-title">Mobile App Solutions</div>
              <div className="svc-desc">Native and cross-platform mobile experiences for iOS and Android that users actually love.</div>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon-wrap teal"><i className="fas fa-cloud"></i></div>
              <div className="svc-title">Cloud & DevOps Services</div>
              <div className="svc-desc">Infrastructure design, CI/CD pipelines, and cloud migration strategies built to scale with you.</div>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon-wrap navy"><i className="fas fa-paint-brush"></i></div>
              <div className="svc-title">UI / UX Design</div>
              <div className="svc-desc">User-centered interfaces that are intuitive, accessible, and perfectly on-brand from day one.</div>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon-wrap gold"><i className="fas fa-lightbulb"></i></div>
              <div className="svc-title">IT Consulting</div>
              <div className="svc-desc">Strategic technology guidance to align your digital investments with real, measurable business goals.</div>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon-wrap teal"><i className="fas fa-shipping-fast"></i></div>
              <div className="svc-title">Logistics & Supply Chain Solutions</div>
              <div className="svc-desc">Smart route planning, warehouse management (WMS), real-time fleet tracking, and custom dispatch software engineered to optimize operations.</div>
            </div>
            <div className="svc-card reveal">
              <div className="svc-icon-wrap navy"><i className="fas fa-shield-alt"></i></div>
              <div className="svc-title">Insurance & Insurtech Applications</div>
              <div className="svc-desc">Custom claim processing systems, policy administration portals, risk calculation engines, and secure client self-service platforms.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="sec-wrap">
          <div className="sec-eyebrow reveal">About Us</div>
          <div className="sec-title reveal">We are Closely Info Tech</div>
          <div className="about-grid">
            <div className="about-left reveal">
              <p className="about-text">Based in Coimbatore, Tamil Nadu, Closely Info Tech is a technology company driven by one belief — that great software changes everything. We partner with startups, growing businesses, and enterprises to build the digital products they need to move faster, serve customers better, and stay ahead.</p>
              <p className="about-text">We don't just deliver code — we invest in understanding your business, your users, and your goals. Every project is a long-term collaboration built on transparency and trust.</p>
              <div className="about-vals">
                <div className="about-val">
                  <div className="val-icon"><i className="fas fa-handshake"></i></div>
                  <div>
                    <div className="val-title">Client-first always</div>
                    <div className="val-desc">Your goals shape every architecture and design decision we make.</div>
                  </div>
                </div>
                <div className="about-val">
                  <div className="val-icon"><i className="fas fa-sync-alt"></i></div>
                  <div>
                    <div className="val-title">Agile & transparent</div>
                    <div className="val-desc">Regular demos and updates — you're never left wondering what's happening.</div>
                  </div>
                </div>
                <div className="about-val">
                  <div className="val-icon"><i className="fas fa-expand-arrows-alt"></i></div>
                  <div>
                    <div className="val-title">Built to scale</div>
                    <div className="val-desc">Foundations designed to grow with your business, not against it.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-right reveal">
              <div className="about-card">
                <div className="about-card-icon">🚀</div>
                <div className="about-card-title">Innovation at the core</div>
                <div className="about-card-desc">We stay ahead of technology trends so our clients always get modern, future-proof solutions that give them a real competitive edge.</div>
              </div>
              <div className="about-card gold-accent">
                <div className="about-card-icon">🤝</div>
                <div className="about-card-title">Long-term partnerships</div>
                <div className="about-card-desc">We see projects through from concept to launch and beyond — with post-deployment support, monitoring, and continued development as you grow.</div>
              </div>
              <div className="about-card">
                <div className="about-card-icon">🎯</div>
                <div className="about-card-title">Results that matter</div>
                <div className="about-card-desc">We measure success by your outcomes — faster load times, more conversions, fewer errors, happier users.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="sec-wrap">
          <div className="sec-eyebrow reveal">How We Work</div>
          <div className="sec-title reveal">A process built for clarity</div>
          <p className="sec-sub reveal">No surprises, no black boxes — just a proven approach that delivers.</p>
          <div className="process-steps">
            <div className="p-step reveal">
              <div className="p-step-left"><div className="p-num">01</div></div>
              <div>
                <div className="p-step-title">Discovery & Scoping</div>
                <div className="p-step-desc">We learn your business deeply, define the problem clearly, and align on goals before a single line of code is written. This step prevents 90% of problems downstream.</div>
              </div>
            </div>
            <div className="p-step reveal">
              <div className="p-step-left"><div className="p-num">02</div></div>
              <div>
                <div className="p-step-title">Design & Architecture</div>
                <div className="p-step-desc">UI/UX wireframes and technical blueprints reviewed and approved by you. We build the map before we start the journey.</div>
              </div>
            </div>
            <div className="p-step reveal">
              <div className="p-step-left"><div className="p-num">03</div></div>
              <div>
                <div className="p-step-title">Agile Development</div>
                <div className="p-step-desc">Sprint-based builds with regular demos. You see real progress every week — and can provide feedback that shapes the product in real time.</div>
              </div>
            </div>
            <div className="p-step reveal">
              <div className="p-step-left"><div className="p-num">04</div></div>
              <div>
                <div className="p-step-title">QA & Delivery</div>
                <div className="p-step-desc">Thorough testing across devices, browsers, and environments before going live. We catch problems so your users don't have to.</div>
              </div>
            </div>
            <div className="p-step reveal">
              <div className="p-step-left"><div className="p-num">05</div></div>
              <div>
                <div className="p-step-title">Support & Growth</div>
                <div className="p-step-desc">Post-launch monitoring, maintenance, and continued development as your product evolves. We're with you for the long run.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="sec-wrap">
          <div className="sec-eyebrow reveal">Get In Touch</div>
          <div className="sec-title reveal">Let's build something amazing</div>
          <div className="contact-grid">
            <div className="contact-info reveal">
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
                Have a project in mind? We'd love to hear from you. Fill in the form or reach us directly.
              </p>
              <div className="contact-item">
                <div className="c-icon teal"><i className="fas fa-envelope"></i></div>
                <div>
                  <div className="c-label">Email us</div>
                  <div className="c-val">closelyinfotech@gmail.com</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="c-icon gold"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <div className="c-label">Location</div>
                  <div className="c-val">Coimbatore, Tamil Nadu, India</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="c-icon navy"><i className="fas fa-clock"></i></div>
                <div>
                  <div className="c-label">Response time</div>
                  <div className="c-val">Within 24 hours</div>
                </div>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <button className="btn-main" onClick={onOpenFeedback} style={{ fontSize: '14px', padding: '0.7rem 1.5rem' }}>
                  <i className="fas fa-star" style={{ marginRight: '6px' }}></i>Send Feedback
                </button>
              </div>
            </div>
            
            <div className="contact-form reveal">
              {!isContactSuccess ? (
                <form onSubmit={handleContactSubmit} id="contactFormWrap">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="cf-fname">First Name</label>
                      <input 
                        type="text" 
                        placeholder="Your name" 
                        id="cf-fname"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cf-lname">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Last name" 
                        id="cf-lname"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-email">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      id="cf-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-service">Service Interested In</label>
                    <select 
                      id="cf-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="">Select a service...</option>
                      <option>Custom Software Development</option>
                      <option>Web Application Development</option>
                      <option>Mobile App Solutions</option>
                      <option>Cloud & DevOps Services</option>
                      <option>UI / UX Design</option>
                      <option>IT Consulting</option>
                      <option>Logistics & Supply Chain Solutions</option>
                      <option>Insurance & Insurtech Applications</option>
                      <option>Other / Not sure yet</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-msg">Message</label>
                    <textarea 
                      placeholder="Tell us about your project or idea..." 
                      id="cf-msg"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                  </div>
                  <button type="submit" className="form-submit">
                    <i className="fas fa-paper-plane"></i>&nbsp; Send Message
                  </button>
                </form>
              ) : (
                <div className="success-msg" id="contactSuccess" style={{ display: 'block' }}>
                  <div className="check"><i className="fas fa-check"></i></div>
                  <h3>Message sent!</h3>
                  <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-logo">
                <Logo width={100} height={46} />
              </div>
              <p className="footer-desc">Transforming ideas into innovative digital solutions that help businesses grow.</p>
            </div>
            
            <div>
              <div className="footer-col-title">Services</div>
              <div className="footer-links">
                <a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Custom Software</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Web Development</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Mobile Apps</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Cloud & DevOps</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>UI/UX Design</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>IT Consulting</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Logistics Solutions</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Insurance Apps</a>
              </div>
            </div>
            
            <div>
              <div className="footer-col-title">Company</div>
              <div className="footer-links">
                <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}>About Us</a>
                <a href="#process" onClick={(e) => { e.preventDefault(); handleScrollTo('process'); }}>Our Process</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}>Contact</a>
                <a href="mailto:closelyinfotech@gmail.com">closelyinfotech@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 Closely Info Tech · Coimbatore, Tamil Nadu, India</div>
            <div className="footer-tags">
              <span className="footer-tag">#CloselyInfoTech</span>
              <span className="footer-tag">#InnovatingBuildingGrowing</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
