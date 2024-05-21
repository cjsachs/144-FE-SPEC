interface StatusProp {
    status: 'loading' | 'error' | 'success'
}

const Status = () => {

    const statusInput: StatusProp = {
        status: 'success'
    }

    let message;
    if(statusInput.status === 'loading'){
        message = 'Loading...'
    } else if (statusInput.status === 'error'){
        message = 'Error loading data'
    } else if (statusInput.status === 'success'){
        message = 'Successfully loaded data'
    } else {
        message = 'Invalid status'
    }

  return (
    <div>
        <h1>Status</h1>
        <p>{message}</p>
    </div>
  )
}

export default Status