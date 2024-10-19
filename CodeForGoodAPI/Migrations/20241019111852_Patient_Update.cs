using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CodeForGoodAPI.Migrations
{
    /// <inheritdoc />
    public partial class Patient_Update : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Ethnicity",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsInsured",
                table: "Patients",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Race",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ethnicity",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "IsInsured",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Race",
                table: "Patients");
        }
    }
}
