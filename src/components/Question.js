import React from 'react'
function Question( {id,question,answer} ) {
  return (
    <div class="card">
    <div class="card-header" id="faqHeading-1">
        <div class="mb-0">
            <h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                <span class="badge">{id}</span>{question}
            </h5>
        </div>
    </div>
    <div id="faqCollapse-1" class="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
        <div class="card-body">
            <p>{answer} </p>
        </div>
    </div>
</div>
  )
}

export default Question