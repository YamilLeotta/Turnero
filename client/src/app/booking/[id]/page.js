'use client'
import Swal from 'sweetalert2';

function confirmHandler(e){
  e.preventDefault();
  Swal.fire({
    title: 'Are you sure?',
    text: "31/07/2023 - 10:30: Perfilado con Federico Rodriguez",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, confirm it!'
  })
  .then(result => {
    if (result.isConfirmed)
      Swal.fire({
        title: 'Your book has been confirmed.',
        icon: 'success',
        timer: 2500
      })
      .then(() => window.location.replace('/'))
  })
}

export default function Booking() {
  return (
      <section className="content">
        <div style={{backgroundColor: "violet"}}>
          <h4>Barbero:</h4>
          <select name="barbero">
            <option value={0}>Cualquiera...</option>
            <option value={1}>Leandro Zapata</option>
            <option value={2}>Federico Rodriguez</option>
            <option value={3}>Damián Zapata</option>
            <option value={4}>Nicolás Díaz</option>
          </select>
        </div>

        <div className="turn-list">
          <label><input type="radio" name="horarios" value={0} /><span>10:00</span></label>
          <label><input type="radio" name="horarios" value={1} /><span>10:15</span></label>
          <label><input type="radio" name="horarios" value={2} /><span>10:30</span></label>
          <label><input type="radio" name="horarios" value={3} /><span>10:45</span></label>
          <label><input type="radio" name="horarios" value={4} /><span>11:00</span></label>
          <label><input type="radio" name="horarios" value={5} /><span>11:15</span></label>
          <label><input type="radio" name="horarios" value={6} /><span>11:30</span></label>
          <label><input type="radio" name="horarios" value={7} /><span>11:45</span></label>
          <label><input type="radio" name="horarios" value={8} /><span>12:00</span></label>
          <label><input type="radio" name="horarios" value={9} /><span>12:15</span></label>
          <label><input type="radio" name="horarios" value={10} /><span>12:30</span></label>
          <label><input type="radio" name="horarios" value={11} /><span>12:45</span></label>
          <label><input type="radio" name="horarios" value={12} /><span>13:00</span></label>
          <label><input type="radio" name="horarios" value={13} /><span>13:15</span></label>
          <label><input type="radio" name="horarios" value={14} /><span>13:30</span></label>
          <label><input type="radio" name="horarios" value={15} /><span>13:45</span></label>
          <label><input type="radio" name="horarios" value={16} /><span>14:00</span></label>
          <label><input type="radio" name="horarios" value={17} /><span>14:15</span></label>
          <label><input type="radio" name="horarios" value={18} /><span>14:30</span></label>
          <label><input type="radio" name="horarios" value={19} /><span>14:45</span></label>
          <label><input type="radio" name="horarios" value={20} /><span>15:00</span></label>
          <label><input type="radio" name="horarios" value={21} /><span>15:15</span></label>
          <label><input type="radio" name="horarios" value={22} /><span>15:30</span></label>
          <label><input type="radio" name="horarios" value={23} /><span>15:45</span></label>
        </div>
        
        <textarea type="text" placeholder="Observaciones..." className="obs" />

        <div className="confirm">
          <h4>31/07/2023 - 10:30: Perfilado con Federico Rodriguez</h4>
          <button onClick={e => confirmHandler(e)}>Confirmar</button>
        </div>

      </section>
  )
}