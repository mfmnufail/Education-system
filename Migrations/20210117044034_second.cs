using Microsoft.EntityFrameworkCore.Migrations;

namespace ObeSystem.Migrations
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Lolists",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Description", "Lo_name" },
                values: new object[] { "Study about 12 patterns", "Patterns" });

            migrationBuilder.UpdateData(
                table: "Lolists",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Description", "Lo_code", "Lo_name" },
                values: new object[] { "Study about architecture", "LO2", "Architecture" });

            migrationBuilder.UpdateData(
                table: "Lolists",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Description", "Lo_code", "Lo_name" },
                values: new object[] { "Efficiency code writing", "LO3", "Clean-Code" });

            migrationBuilder.UpdateData(
                table: "Lolists",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Description", "Lo_code", "Lo_name" },
                values: new object[] { "Final Project", "LO4", "Implementation" });

            migrationBuilder.UpdateData(
                table: "Polists",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Description", "Po_name" },
                values: new object[] { "Creating Resume", "Assignement1" });

            migrationBuilder.UpdateData(
                table: "Polists",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Description", "Po_code", "Po_name" },
                values: new object[] { "Project-Proposal", "PO2", "Project-Imp" });

            migrationBuilder.UpdateData(
                table: "Polists",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Description", "Po_code", "Po_name" },
                values: new object[] { "Mid-Evaluation", "PO3", "Project-Viva" });

            migrationBuilder.UpdateData(
                table: "Polists",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Description", "Po_code", "Po_name" },
                values: new object[] { "End-Semester", "PO4", "Final-Evaluation" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Lolists",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Description", "Lo_name" },
                values: new object[] { "Nothing", "Practical" });

            migrationBuilder.UpdateData(
                table: "Lolists",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Description", "Lo_code", "Lo_name" },
                values: new object[] { "Nothing", "LO1", "Practical" });

            migrationBuilder.UpdateData(
                table: "Lolists",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Description", "Lo_code", "Lo_name" },
                values: new object[] { "Nothing", "LO1", "Practical" });

            migrationBuilder.UpdateData(
                table: "Lolists",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Description", "Lo_code", "Lo_name" },
                values: new object[] { "Nothing", "LO1", "Practical" });

            migrationBuilder.UpdateData(
                table: "Polists",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Description", "Po_name" },
                values: new object[] { "Nothing", "Viva" });

            migrationBuilder.UpdateData(
                table: "Polists",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Description", "Po_code", "Po_name" },
                values: new object[] { "Nothing", "PO1", "Viva" });

            migrationBuilder.UpdateData(
                table: "Polists",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Description", "Po_code", "Po_name" },
                values: new object[] { "Nothing", "PO1", "Viva" });

            migrationBuilder.UpdateData(
                table: "Polists",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Description", "Po_code", "Po_name" },
                values: new object[] { "Nothing", "PO1", "Viva" });
        }
    }
}
