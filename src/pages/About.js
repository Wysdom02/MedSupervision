import React from 'react'
import Faqs from '../static/Faqs'
import Question from '../components/Question'
function About() {
    const questionlist=Faqs.map(question => 
        <Question key={question.id} id={question.id} question={question.question} answer={question.answer}/>)
    return (
    <section class="faq-section">
<div class="container">
  <div class="row">
                    <div class="col-md-6 offset-md-3">

                        <div class="faq-title text-center pb-3">
                            <h2>FAQ</h2>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <div class="faq" id="accordion">
                           {questionlist}
                        </div>
                    </div>
                  </div>
                </div>
                </section>
  )
}

export default About