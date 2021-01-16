using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ObeSystem.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lolists",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Lo_name = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    Lo_code = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    Description = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    Weight = table.Column<double>(type: "double", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lolists", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Polists",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Po_name = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    Po_code = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    Description = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    Weight = table.Column<double>(type: "double", nullable: false),
                    LolistId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Polists", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Polists_Lolists_LolistId",
                        column: x => x.LolistId,
                        principalTable: "Lolists",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Lolists",
                columns: new[] { "Id", "Description", "Lo_code", "Lo_name", "Weight" },
                values: new object[,]
                {
                    { 1, "Nothing", "LO1", "Practical", 0.20000000000000001 },
                    { 2, "Nothing", "LO1", "Practical", 0.20000000000000001 },
                    { 3, "Nothing", "LO1", "Practical", 0.20000000000000001 },
                    { 4, "Nothing", "LO1", "Practical", 0.20000000000000001 }
                });

            migrationBuilder.InsertData(
                table: "Polists",
                columns: new[] { "Id", "Description", "LolistId", "Po_code", "Po_name", "Weight" },
                values: new object[,]
                {
                    { 1, "Nothing", null, "PO1", "Viva", 0.5 },
                    { 2, "Nothing", null, "PO1", "Viva", 0.5 },
                    { 3, "Nothing", null, "PO1", "Viva", 0.5 },
                    { 4, "Nothing", null, "PO1", "Viva", 0.5 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Polists_LolistId",
                table: "Polists",
                column: "LolistId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Polists");

            migrationBuilder.DropTable(
                name: "Lolists");
        }
    }
}
