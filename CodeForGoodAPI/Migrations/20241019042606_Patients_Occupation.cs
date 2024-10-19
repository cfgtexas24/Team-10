using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodeForGoodAPI.Migrations
{
    /// <inheritdoc />
    public partial class Patients_Occupation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserType",
                table: "Patients",
                newName: "Occupation");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Occupation",
                table: "Patients",
                newName: "UserType");
        }
    }
}
