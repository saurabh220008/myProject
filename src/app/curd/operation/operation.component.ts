import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class OperationComponent implements OnInit {
  student: any;
  singlestudent: any;
  closeResult = '';
  file: File;
  arrayBuffer: any;
  filelist: any;
  error: any[] = [];
  success: any[] = [];
  alpha = "^[A-z]{4}[0-9]{7}$"
  excel: any[];
  data: any;
  errorList: any
  successList: any
  scount: any
  ecount: any
  successEnc: any
  errorEnc: any

  constructor(private service: EmployeeServiceService, private router: Router, private modalService: NgbModal) {

  }


  ngOnInit() {
    // this.getAllEmp();
    this.getdata();
    this.successData();
  }
  employeedata: any;
  eid!: number;
  sid!: number;
  stuentdata: any;
  students = [];
  id: number;


  // getAllEmp() {
  //   this.service.getAllEmployee().subscribe(data => {
  //     console.log(JSON.stringify(data));
  //     this.employeedata = data;
  //   });
  // }

  view(id: number) {
    this.eid = id;
    // this.service.getAllEmployee().subscribe(data => {
    //   console.log(JSON.stringify(data));
    //   this.employeedata = data;
    // });
    // this.service.getSingleEmp(this.eid).subscribe(data => {
    //   console.log(JSON.stringify(data));
    //   this.singleEmployeedata = data;
    this.router.navigateByUrl('/user/viewSingleEmp?eid=' + this.eid);
    //   this.singledata.emit(this.singleEmployeedata); 
    // });
  }

  open(content: any, i: number) {
    debugger;
    this.singlestudent = this.student[i];
    this.id = this.student[i];
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      localStorage.removeItem("sheet");
      console.log(localStorage.getItem("sheet"))
      localStorage.removeItem("errorList");
      localStorage.removeItem("successList");
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      localStorage.removeItem("sheet");
      console.log(localStorage.getItem("sheet"))
      localStorage.removeItem("errorList");
      localStorage.removeItem("successList");
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  op(ship: any) {
    debugger;
    // this.singlestudent = 
    this.errorList;
    // this.singlestudent = 
    this.successList;
    this.modalService.open(ship, { size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  clear() {
    localStorage.removeItem("sheet");
    console.log(localStorage.getItem("sheet"))
    localStorage.removeItem("errorList");
    localStorage.removeItem("successList")
  }
  edit(id: number) {
    this.sid = id;
    this.router.navigateByUrl('/curd/insert/' + this.sid);
  }

  getdata() {
    this.student = localStorage.getItem('student');
    this.student = JSON.parse(this.student);
    console.log(this.student)
  }

  delete(id: number) {
    debugger;

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success px-2',
        cancelButton: 'btn btn-danger px-2'
      },
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.student.splice(id, 1);
        localStorage.setItem("student", JSON.stringify(this.student));

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your record is safe :)',
          'error'
        )
      }
    })
  }


  addfile(event: any) {
    localStorage.removeItem("sheet");
    console.log(localStorage.getItem("sheet"))
    localStorage.removeItem("errorList");
    localStorage.removeItem("successList");
    this.file = event.target.files[0];
  }

  uploadfile(ship: any) {
    debugger;
    // this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);

    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      console.log(first_sheet_name);
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(worksheet);
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      var arraylist = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      this.filelist = arraylist;
      console.log(this.filelist)


      localStorage.setItem("sheet", JSON.stringify(this.filelist));
    }
    const sheet = JSON.parse(JSON.stringify(localStorage.getItem("sheet")));
    // console.log(JSON.parse(sheet));
    var x = JSON.parse(sheet)

    for (let i = 0; i < x.length; i++) {

      if (x[i]['Container No'] == null || x[i]['Port Name'] == null || x[i]['Shipment Data'] == null) {
        // console.log(x[i]);
        this.error.push({
          "Container_No": x[i]['Container No'],
          "Port_Name": x[i]['Port Name'],
          "Shipment_Data": x[i]['Shipment Data']
        })
        // console.log(this.error)
      } else if (!x[i]['Container No'].match(this.alpha)) {
        // console.log(x[i]);

        //===========================================================================
        // Pattern Matching
        //-----------------------------------------------------------------------------

        this.error.push({
          "Container_No": x[i]['Container No'],
          "Port_Name": x[i]['Port Name'],
          "Shipment_Data": x[i]['Shipment Data']
        })
        // console.log(this.error)
      } else {
        this.success.push({
          "Container_No": x[i]['Container No'],
          "Port_Name": x[i]['Port Name'],
          "Shipment_Data": x[i]['Shipment Data']
        })
      }
    }

    this.successEnc = CryptoJS.AES.encrypt(JSON.stringify(this.success), '').toString();
    this.errorEnc = CryptoJS.AES.encrypt(JSON.stringify(this.error), '').toString();
    debugger;
    console.log(this.successEnc)
    console.log(this.errorEnc)
    var b = CryptoJS.AES.decrypt(this.successEnc, '').toString(CryptoJS.enc.Utf8)
    console.log(JSON.parse(b));

    localStorage.setItem("errorList", JSON.stringify(this.errorEnc))
    localStorage.setItem("successList", JSON.stringify(this.successEnc))
    /// console.log(JSON.parse(JSON.stringify(el)));
    localStorage.getItem("errorList");

    // console.log('-----------------')
    const el = localStorage.getItem("errorList");
    this.errorList = JSON.parse(el || '{}');
    // console.log(this.errorList)
    this.errorList = (JSON.parse(CryptoJS.AES.decrypt(this.errorEnc, '').toString(CryptoJS.enc.Utf8)))


    const sl = localStorage.getItem("successList");

    // console.log('-----------------')

    this.successList = JSON.parse(sl || '{}');
    this.successList = JSON.parse(CryptoJS.AES.decrypt(this.successEnc, '').toString(CryptoJS.enc.Utf8)) 

    // console.log(this.successList);

    // }

    //Download File

    // this.exportToExcel()

    this.op(ship)

  }

  successData() {
    // const sl = localStorage.getItem("successList");

    // console.log('-----------------')

    this.successList;
  }

  errorData() {
    // const el = localStorage.getItem("errorList");

    // console.log('-----------------')

    this.errorList
    // console.log(this.errorList);
  }


  exportToExcel() {
    debugger
    const fileName = 'errorList.xlsx';

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.errorList);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'test');

    XLSX.writeFile(wb, fileName);
  }

}

