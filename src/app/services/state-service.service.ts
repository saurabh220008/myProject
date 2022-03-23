import { Injectable } from '@angular/core';
import { district } from '../user/district.model';
import { state } from '../user/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  constructor() { }

  getStates() {
    return [
     new state(1, 'Maharashtra' ),
     new state(2, 'Gujarat'),
    ];
  }
  
  getDistricts() {
   return [
     new district(1, 1, 'Ahmednagar' ),
     new district(2, 1, 'Akola' ),
     new district(3, 1, 'Amravati'),
     new district(4, 1, 'Aurangabad'),
     new district(5, 1, 'Beed'),
     new district(6, 1, 'Bhandara'),
     new district(7, 1, 'Buldhana'),
     new district(8, 1, 'Chandrapur'),
     new district(9, 1, 'Dhule'),
     new district(10, 1, 'Gadchiroli	'),
     new district(11, 1, 'Gondia'),
     new district(12, 1, 'Jalgaon'),
     new district(13, 1, 'Jalna'),
     new district(14, 1, 'Kolhapur'),
     new district(15, 1, 'Latur'),
     new district(16, 1, 'Mumbai City'),
     new district(17, 1, 'Mumbai Suburban'),
     new district(18, 2, 'Ahmedabad' ),
     new district(19, 2, 'Amreli'),
     new district(20, 2, 'Anand' ),
     new district(21, 2, 'Aravalli' ),
     new district(22, 2, 'Banaskantha' ),
     new district(23, 2, 'Bharuch' ),
     new district(24, 2, 'Bhavnagar' ),
     new district(25, 2, 'Botad' ),
     new district(26, 2, 'Chhota Udaipur' ),
     new district(27, 2, 'Dahod' ),
     new district(28, 2, 'Dang' ),
     new district(29, 2, 'Devbhoomi Dwarka' ),
     new district(30, 2, 'Gandhinagar' ),
     new district(31, 2, 'Gir Somnath' ),
     new district(32, 2, 'Jamnagar' ),
     new district(33, 2, 'Junagadh' ),
     new district(34, 2, 'Kutch' ),
     new district(35, 2, 'Kheda' ),
     new district(36, 2, 'Mahisagar' ),
     new district(37, 2, 'Mehsana' ),
     new district(38, 2, 'Morbi' ),
     new district(39, 2, 'Narmada' ),
     new district(40, 2, 'Navsari' ),
     new district(41, 2, 'Panchmahal' ),
    ];
  }
}
