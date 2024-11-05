using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeContext dbContext;

        public EmployeeController(EmployeeContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GetAllEmployees()
        {

            var allEmployees=dbContext.Employees.ToList();

            return Ok(allEmployees);

        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetEmployeeById(int id) {

            var employee = dbContext.Employees.Find(id);

            if (employee == null)
            {
                return NotFound("No user found");
            }
            return Ok(employee);
        
        }

        [HttpPost]
        public IActionResult AddEmployee(AddEmployeeDto addEmployeeDto) {

            var employeeEntity = new Employee()
            {
                FirstName = addEmployeeDto.FirstName,

                LastName = addEmployeeDto.LastName,

                Email = addEmployeeDto.Email,

                DOB = addEmployeeDto.DOB,

                Age = addEmployeeDto.Age,

                Salary = addEmployeeDto.Salary,

                Department = addEmployeeDto.Department,
            };
    

            dbContext.Employees.Add(employeeEntity);
            dbContext.SaveChanges();

            return Ok(employeeEntity);
        
        }

        [HttpPut]
        [Route("{id:int}")]

        public IActionResult UpdateEmployee(int id, UpdateEmployeeDto updateEmployeeDto) {

            var employee=dbContext.Employees.Find(id);

            if (employee == null)
            {
                return NotFound();   
            }

            employee.FirstName = updateEmployeeDto.FirstName;
            employee.LastName = updateEmployeeDto.LastName; 
            employee.Email = updateEmployeeDto.Email;
            employee.DOB = updateEmployeeDto.DOB;
            employee.Age = updateEmployeeDto.Age;
            employee.Salary = updateEmployeeDto.Salary;
            employee.Department = updateEmployeeDto.Department;

            dbContext.SaveChanges();
            return Ok(employee);
            
        
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteEmployee(int id)
        {
            var employee= dbContext.Employees.Find(id); 
            if (employee == null) {
            return NotFound();}

            dbContext.Employees.Remove(employee); 
            dbContext.SaveChanges();
            return Ok(employee);
        }

        
    }
}
