export default function DateOfBirthSelect({
    bDay, bMonth, bYear, days, months, years, handleRegisterChange, dateError
}) {
    return (
        <div className="register-grid">
             <select name="bDay" value={bDay} onChange={handleRegisterChange}>
        {days.map((day, i) => (
          <option value={day} key={i}>
            {day}
          </option>
        ))}
      </select>
      <select name="bMonth" value={bMonth} onChange={handleRegisterChange}>
        {months.map((month, i) => (
          <option value={month} key={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="bYear" value={bYear} onChange={handleRegisterChange}>
        {years.map((year, i) => (
          <option value={year} key={i}>
            {year}
          </option>
        ))}
            </select>
            {dateError && <div className="input-error">{dateError}</div>}
        </div>
    )
}