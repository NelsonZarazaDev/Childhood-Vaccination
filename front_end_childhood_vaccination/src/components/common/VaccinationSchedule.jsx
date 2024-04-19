import React from "react";
import { RiEdit2Line } from "react-icons/ri";

export default function VaccinationSchedule({ enfermera = true }) {
  return (
    <>
      <table className="invisible hidden shadow-xl md:table md:visible md:table-fixed md:w-full md:text-center md:drop-shadow-xl">
        <thead>
          <tr className="h-16 shadow-sm">
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white rounded-tl-lg">EDAD</th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">VACUNA</th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">DOSIS</th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">FECHA DE APLICACIÓN</th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">LABORATORIO</th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">NUMERO DE LOTE</th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">FECHA PROXIMA CITA</th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">
              NOMBRE DEL VACUNADOR
            </th>
            {enfermera ? (
              <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white rounded-tr-lg">
                ACCIONES
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>

          <tr className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">Recién nacido</td>
            <td>BCG</td>
            <td>Unica</td>
            <td>30/03/2010</td>
            <td>Serum</td>
            <td>03769009</td>
            <td>12/04/2024</td>
            <td>Nelson Mauricio</td>
            {enfermera ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>
        </tbody>
      </table>


      {/* MOVIL */}
      <div className="visible md:hidden md:invisible space-y-2">
        <div className="max-w-lg mx-auto">
          <details className="bg-blue-200 :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg">
            <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
              Recién nacidos
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </details>
        </div>

        <div className="max-w-lg mx-auto">
          <details className="bg-blue-200 :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg">
            <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
              A los 2 meses
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </details>
        </div>

        <div className="max-w-lg mx-auto">
          <details className="bg-blue-200 :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg">
            <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
              A los 4 meses
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </details>
        </div>

        <div className="max-w-lg mx-auto">
          <details className="bg-blue-200 :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg">
            <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
              A los 6 meses
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </details>
        </div>

        <div className="max-w-lg mx-auto">
          <details className="bg-blue-200 :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg">
            <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
              A los 7 meses
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </details>
        </div>

        <div className="max-w-lg mx-auto">
          <details className="bg-blue-200 :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg">
            <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
              A los 12 meses
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </details>
        </div>

        <div className="max-w-lg mx-auto">
          <details className="bg-blue-200 :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg">
            <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
              A los 18 meses
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </details>
        </div>

        <div className="max-w-lg mx-auto">
          <details className="bg-blue-200 :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg">
            <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
              A los 5 años
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </details>
        </div>

        <div className="max-w-lg mx-auto">
          <details className="bg-blue-200 :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg">
            <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
              Niñas a los 9 años
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>BCG</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>Unica</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>30/03/2010</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>Serum</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>03769009</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>12/04/2024</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>Nelson Mauricio</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">ACCIONES:</div>
                {enfermera ? (
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}
