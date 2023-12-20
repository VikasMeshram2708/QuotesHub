import React from 'react'

const CreateQuotes = () => {
  return (
    <section className='mt-24'>
      {/* TODO : Title, Description, Slug */}
      <form className='card-body bg-neutral-900 max-w-2xl mx-auto rounded-lg'>
        <div className="form-control text-center">
          <label htmlFor="form-heading">
            <span className="label-text text-md md:text-2xl font-bold">Create Your Quote</span>
          </label>
        </div>
        {/* Title Area */}
        <div className="form-control">
          <label htmlFor="quoteTitle" className='label'>
            <span className="label-text text-md md:text-lg">
              Title Of Your Quote
            </span>
          </label>
          <input type="text" className="input input-borderedm rounded-md" />
        </div>

        {/* Description */}
        <div className="form-control">
          <label htmlFor="quoteTitle" className='label'>
            <span className="label-text text-md md:text-lg">
              Description
            </span>
          </label>
          <input type="text" className="input input-borderedm rounded-md" />
        </div>

        {/* TODO : Slug auto-generated as soon as the user enter the title slug should be generate at that time */}
        <div className="form-control">
          <label htmlFor="quoteTitle" className='label'>
            <span className="label-text text-md md:text-lg">
              Slug
            </span>
          </label>
          <input type="text" className="input input-borderedm rounded-md" />
        </div>

        {/* Create Button */}
        <div className="flex justify-center">
          <button type='submit' className="px-4 py-2 bg-violet-500 rounded-md text-white text-md md:text-lg">Create</button>
        </div>
      </form>
    </section>
  )
}

export default CreateQuotes;